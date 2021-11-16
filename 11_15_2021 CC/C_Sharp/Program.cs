using System;

namespace C_Sharp
{
  class Program
  {
    static void Main(string[] args)
    {
      //Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.
      Console.WriteLine("Examples: ");
      Console.Write("Happy Birthday!" + " -> ");
      ReverseCase("Happy Birthday!");
      Console.Write("MANY THANKS" + " -> ");
      ReverseCase("MANY THANKS");
      Console.Write("sPoNtAnEoUs" + " -> ");
      ReverseCase("sPoNtAnEoUs");
      Console.Write("Enter a phrase: ");
      string input = Console.ReadLine();
      ReverseCase(input);
    }

    static void ReverseCase(string s)
    {
      string output = "";
      foreach (char c in s)
      {
        if (char.IsUpper(c))
        {
          output += c.ToString().ToLower();
        }
        else if (char.IsLower(c))
        {
          output += c.ToString().ToUpper();
        }
        else
        {
          output += c;
        }
      }
      Console.WriteLine(output);
    }
  }
}
