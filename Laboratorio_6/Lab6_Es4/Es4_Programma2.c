#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include <fcntl.h>
#include <assert.h>
#include <string.h>
#include <ctype.h>
#define N 50

int main(void)
{
    char str[N];
    int i;

    scanf("%s", str);
    for(i=0; i<strlen(str); i++)
    {
        str[i]=toupper(str[i]);
    }
    printf("%s", str);
    return 0;
}
