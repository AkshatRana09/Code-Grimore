const dsaTopics = [
  // --- Arrays ---
  {
    id: 1,
    title: "Find Maximum Element",
    category: "Array",
    description: "Traverse array to find the maximum element.",
    code: `int findMax(vector<int>& arr) {
    int maxEl = arr[0];
    for (int i = 1; i < arr.size(); i++) {
        if (arr[i] > maxEl) maxEl = arr[i];
    }
    return maxEl;
}`
  },
  {
    id: 2,
    title: "Reverse an Array",
    category: "Array",
    description: "Reverse array using two-pointer technique.",
    code: `void reverseArray(vector<int>& arr) {
    int start = 0, end = arr.size() - 1;
    while (start < end) {
        swap(arr[start++], arr[end--]);
    }
}`
  },
  {
    id: 3,
    title: "Check for Palindrome Array",
    category: "Array",
    description: "Check if the array reads the same forward and backward.",
    code: `bool isPalindrome(vector<int>& arr) {
    int l = 0, r = arr.size() - 1;
    while (l < r) {
        if (arr[l++] != arr[r--]) return false;
    }
    return true;
}`
  },

  // --- Strings ---
  {
    id: 4,
    title: "Reverse a String",
    category: "String",
    description: "Reverse characters in a string.",
    code: `void reverseString(string &s) {
    reverse(s.begin(), s.end());
}`
  },
  {
    id: 5,
    title: "Check Anagram",
    category: "String",
    description: "Check if two strings are anagrams of each other.",
    code: `bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    for (char c : t) {
        if (--count[c - 'a'] < 0) return false;
    }
    return true;
}`
  },

  // --- Linked List ---
  {
    id: 6,
    title: "Reverse a Linked List",
    category: "Linked List",
    description: "Iteratively reverse a singly linked list.",
    code: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = NULL;
    while (head) {
        ListNode* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}`
  },

  // --- Trees ---
  {
    id: 7,
    title: "Inorder Traversal",
    category: "Tree",
    description: "Recursive inorder traversal of a binary tree.",
    code: `void inorder(TreeNode* root) {
    if (!root) return;
    inorder(root->left);
    cout << root->val << " ";
    inorder(root->right);
}`
  },
  {
    id: 8,
    title: "Height of Tree",
    category: "Tree",
    description: "Find the height of a binary tree.",
    code: `int height(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(height(root->left), height(root->right));
}`
  },

  // --- Graphs ---
  {
    id: 9,
    title: "BFS Traversal",
    category: "Graph",
    description: "Breadth-first search on an undirected graph.",
    code: `void bfs(int start, vector<vector<int>>& adj, vector<bool>& visited) {
    queue<int> q;
    q.push(start);
    visited[start] = true;
    while (!q.empty()) {
        int node = q.front(); q.pop();
        cout << node << " ";
        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                q.push(neighbor);
                visited[neighbor] = true;
            }
        }
    }
}`
  },
  {
    id: 10,
    title: "DFS Traversal",
    category: "Graph",
    description: "Depth-first search on an undirected graph.",
    code: `void dfs(int node, vector<vector<int>>& adj, vector<bool>& visited) {
    visited[node] = true;
    cout << node << " ";
    for (int neighbor : adj[node]) {
        if (!visited[neighbor])
            dfs(neighbor, adj, visited);
    }
}`
  },

  // --- Sorting ---
  {
    id: 11,
    title: "Quick Sort",
    category: "Sorting",
    description: "Divide-and-conquer sorting algorithm.",
    code: `int partition(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++; swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}

void quickSort(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}`
  },

  {
    id: 12,
    title: "Merge Sort",
    category: "Sorting",
    description: "Divide-and-conquer based sorting.",
    code: `void merge(vector<int>& arr, int l, int m, int r) {
    int n1 = m - l + 1, n2 = r - m;
    vector<int> L(n1), R(n2);
    for (int i = 0; i < n1; i++) L[i] = arr[l + i];
    for (int j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2)
        arr[k++] = (L[i] <= R[j]) ? L[i++] : R[j++];
    while (i < n1) arr[k++] = L[i++];
    while (j < n2) arr[k++] = R[j++];
}

void mergeSort(vector<int>& arr, int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}`
  },

  // Add many more here:
  // Binary Search, Kadane’s Algo, KMP, Rabin-Karp, Floyd Warshall,
  // Dijkstra, Prim’s, Kruskal’s, Binary Tree to DLL, LCA, Segment Tree,
  // Trie, Union-Find, Heap Sort, Topological Sort, etc...

];

export default dsaTopics;
