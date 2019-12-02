#!/usr/bin/env python

import scapy.all as scapy
import argparse

def get_scan_arguments():
    parser = argparse.ArgumentParser()
    parser.add_argument("-t","--target", dest="client_ip", help="IP address range to scan")
    options = parser.parse_args()
    if not options.client_ip:
        parser.error("[-] Please specify an IP address range to scan, use --help for more info.")
    return options

def scan(ip):
    arp_request = scapy.ARP(pdst=ip)
    broadcast = scapy.Ether(dst="ff:ff:ff:ff:ff:ff")
    arp_request_broadcast = broadcast/arp_request
    answered_list = scapy.srp(arp_request_broadcast, timeout=1, verbose=False)[0]

    clients_list = []
    for element in answered_list:
        client_dict = {"ip":element[1].psrc, "mac":element[1].hwsrc}
        clients_list.append(client_dict)
    return clients_list

def print_results(results_list):
    print("IP\t\t\tMAC Address\n-----------------------------------------")
    for client in results_list:
        print(client["ip"] + "\t\t" + client["mac"])

options = get_scan_arguments()
scan_results = scan(options.client_ip)

print_results(scan_results)