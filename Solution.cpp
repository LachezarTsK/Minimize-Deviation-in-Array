
#include <vector>
#include <queue>
using namespace std;

class Solution {
    
public:

    int minimumDeviation(vector<int>& nums) {

        priority_queue<int> maxHeap;
        int minimum = INT_MAX;

        for (auto& n : nums) {
            if (n % 2 != 0) {
                n *= 2;
            }
            minimum = min(minimum, n);
            maxHeap.push(n);
        }

        int minDeviation = INT_MAX;

        while (!maxHeap.empty()) {
            int n = maxHeap.top();
            maxHeap.pop();
            minDeviation = min(minDeviation, n - minimum);

            if (n % 2 == 0) {
                n /= 2;
                minimum = min(minimum, n);
                maxHeap.push(n);
            } else {
                break;
            }
        }
        return minDeviation;
    }
};
