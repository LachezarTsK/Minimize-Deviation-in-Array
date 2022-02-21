
import java.util.Comparator;
import java.util.PriorityQueue;

public class Solution {

    public int minimumDeviation(int[] nums) {

        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        int minimum = Integer.MAX_VALUE;

        for (int n : nums) {
            if (n % 2 != 0) {
                n *= 2;
            }
            minimum = Math.min(minimum, n);
            maxHeap.offer(n);
        }

        int minDeviation = Integer.MAX_VALUE;

        while (!maxHeap.isEmpty()) {
            int n = maxHeap.poll();
            minDeviation = Math.min(minDeviation, n - minimum);

            if (n % 2 == 0) {
                n /= 2;
                minimum = Math.min(minimum, n);
                maxHeap.offer(n);
            } else {
                break;
            }
        }
        return minDeviation;
    }
}
