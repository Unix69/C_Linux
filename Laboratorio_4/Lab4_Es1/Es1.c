#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main (int argc, char **argv)
{
    int i = 0;
    fprintf (stdout, "%d %d\n", getpid(), ++i);
    execl (argv[1], argv[1], (char *) 0);
    fprintf (stdout, "End program\n");
    return (1);
}
