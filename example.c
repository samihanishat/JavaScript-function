#include <stdio.h>
#include <stdlib.h>

int main()
{
    double height, weight, BMI, h;
    printf("Enter your height:");
    scanf("%lf/n",&height);
    printf("Enter your weight:");
    scanf("%lf/n",&weight);
    h = height*height;
    printf("%lf",h);
    BMI = weight / h;
    printf("Your BMI is:%lf",BMI);
    return 0;
}
