
using System;
					
public class Program
{
	public static void Main()
	{
		for (int i = 1; i <= 10; i++)
		{
			Console.WriteLine("tabuada de " + i);
			for (int x = 1; x <= 10; x++)
			{
				Console.WriteLine(i*x);
			}
		}
	}
}