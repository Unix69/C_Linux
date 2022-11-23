#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <fcntl.h>
#include <assert.h>
#include <string.h>
#define N 50

int main(int argc, char **argv)
{
    char s[N];

    assert(argc==2);
    strcpy(s, argv[1]);
    execl("/bin/echo", "echo", s, NULL);
    return 0;
}
