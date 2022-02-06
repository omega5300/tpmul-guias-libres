# c#

C sharp tambien conocido como (c# o cs) es un lenguaje de programacion creado por microsoft en el 2000 creado al principio para el framework .net este lenguaje es usado para .net (web, cli, escritorio) tambien con la variante .net core y tambien es usando en el motor grafico unity como lenguaje scripting de videojuegos bajo el etorno de ejecución monodevelop y apps moviles con xamarin.

si ya conoces java se hace mas sencillo aprender c sharp

## ejemplo

``` cs
using System;
using System.Drawing;

public class Example
{
    public static Image img;

    static void Main()
    {
        img = Image.FromFile("Image.png");
    }
}
```

## tipos de datos

``` cs
/* tipos de datos */
string strExample = "";
int intExample = 0;
char charExample = 'a';
double doubleExample = 5.99D;
float floatExample = 35e3F;
bool boolExample = true; 
```

## ciclos funciones y condicionales

``` cs
// if else
int a = 5;
int b = 3;
if (a + b > 10)
{
    Console.WriteLine("The answer is greater than 10");
}
else {
    Console.WriteLine("The answer is not greater than 10");
}

// while
int counter = 0;
while (counter < 10)
{
    Console.WriteLine($"Hello World! The counter is {counter}");
    counter++;
}

// do while
int counter = 0;
do
{
    Console.WriteLine($"Hello World! The counter is {counter}");
    counter++;
} while (counter < 10);

// for
for (int index = 0; index < 10; index++)
{
    Console.WriteLine($"Hello World! The index is {index}");
}

// foreach
foreach (var x in xs)  // line 11
{
   Console.Write($"{x} ");
}
```

## funciones

``` cs
// public function
public int LocalFunctionFactorial(int n)
{
    return nthFactorial(n);

    int nthFactorial(int number) => number < 2 
        ? 1 
        : number * nthFactorial(number - 1);
}

// static functions
public static int LambdaFactorial(int n)
{
    Func<int, int> nthFactorial = default(Func<int, int>);

    nthFactorial = number => number < 2
        ? 1
        : number * nthFactorial(number - 1);

    return nthFactorial(n);
}

// protected functions
protected void AddGas(int gallons) { /* Method statements here */ }

// async methods
static async Task DoSomethingAsync() {
    Task<int> delayTask = DelayAsync();
    int result = await delayTask;

    // The previous two statements may be combined into
    // the following statement.
    //int result = await DelayAsync();

    Console.WriteLine($"Result: {result}");
}
    
// private functions
private int displayOne() {
   return 10;
}
```

## programación orientada a objetos

> los metodos public, private, static y protected es similar a functions pero es diferente concepto

``` cs
abstract class MobilePhone {
    public void Calling();
    public void SendSMS();
}
public class Nokia1400: MobilePhone {}
public class Nokia2700: MobilePhone {
    public void FMRadio();
    public void MP3();
    public void Camera();
}
public class BlackBerry: MobilePhone {
    public void FMRadio();
    public void MP3();
    public void Camera();
    public void Recording();
    public void ReadAndSendEmails();
}

public class Point
{
    public int X { get; }
    public int Y { get; }
    
    public Point(int x, int y) => (X, Y) = (x, y);
}

var p1 = new Point(0, 0);
var p2 = new Point(10, 20);
```

## import

en todos los lenguajes de programación tenemos no importa si son modulos de sistemas como modulos de terceros

``` cs
using System;
using System.Web.Services.Description;
using System.Collections;
using System.Xml;

class MySample
{
   public static void Main()
   {
      Console.WriteLine("Import Sample");
      ServiceDescription myServiceDescription =
         ServiceDescription.Read("StockQuote_cs.wsdl");
      myServiceDescription.Imports.Add(
         CreateImport("http://localhost/stockquote/schemas",
         "http://localhost/stockquote/stockquote_cs.xsd"));
      // Save the ServiceDescripition to an external file.
      myServiceDescription.Write("StockQuote_cs.wsdl");
      Console.WriteLine(
         "Successfully added import to WSDL document 'StockQuote_cs.wsdl'");

      // Print the import collection to the console.
      PrintImportCollection("StockQuote_cs.wsdl");
      myServiceDescription =
         ServiceDescription.Read("StockQuoteService_cs.wsdl");
      myServiceDescription.Imports.Insert(
         0,CreateImport("http://localhost/stockquote/definitions",
         "http://localhost/stockquote/stockquote_cs.wsdl"));
      // Save the ServiceDescripition to an external file.
      myServiceDescription.Write("StockQuoteService_cs.wsdl");
      Console.WriteLine("");
      Console.WriteLine("Successfully added import to WSDL " +
         "document 'StockQuoteService_cs.wsdl'");

      //Print the import collection to the console.
      PrintImportCollection("StockQuoteService_cs.wsdl");
   }
   // Creates an Import object with namespace and location.
   public static Import CreateImport(string targetNamespace,
      string targetlocation)
   {
      Import myImport = new Import();
      myImport.Location = targetlocation;
      myImport.Namespace = targetNamespace;
      return myImport;
   }

   public static void PrintImportCollection(string fileName_wsdl)
   {
      // Read import collection properties from generated WSDL file.
      ServiceDescription myServiceDescription1 =
         ServiceDescription.Read(fileName_wsdl);
      ImportCollection myImportCollection = myServiceDescription1.Imports;
      Console.WriteLine("Enumerating Import Collection for file '" +
         fileName_wsdl +"'...");

      // Print Import properties to console.
      for(int i =0; i < myImportCollection.Count; ++i)
      {
         Console.WriteLine("Namespace : " + myImportCollection[i].Namespace);
         Console.WriteLine("Location  : " + myImportCollection[i].Location);
         Console.WriteLine("ServiceDescription  : " +
            myImportCollection[i].ServiceDescription.Name);
      }
   }
}
```