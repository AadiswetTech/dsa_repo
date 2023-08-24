package algoPrep;

public class LargestThreeElement {

	static void printlargest(int arr[],int arr_size)
	{
		int i,first,second,third;
		if(arr_size<3)
		{
			System.out.println("invalid input");
			return;
		}
		third=first=second=Integer.MIN_VALUE;
		for(i=0;i<arr_size;i++)
		{
			if(arr[i]>first)
			{
				third=second;
				second=first;
				first=arr[i];
			}
			else if(arr[i]>second)
			{
				third=second;
				second=arr[i];
			}
			else if(arr[i]>third)
			{
				third=arr[i];
			}
			System.out.println("elemnts are:" + first + " " + second + " " + third);
			
		}
	}
	
	public static void main(String[] args) {
		int arr[]= {12,23,26,31,67,49,48,65,44};
		int n=arr.length;
     printlargest(arr,n);
		

	}

}
