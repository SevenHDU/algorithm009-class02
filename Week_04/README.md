# 学习笔记

## 课程内容
**深度优先搜索**：常用递归
模板代码
递归版本
```python
visited = set()
def dfs(node, visited):
    if node in visited: # terminator
    	# already visited
    	return
	visited.add(node)
	# process current node here.
	...
	for next_node in node.children():
		if next_node not in visited:
			dfs(next_node, visited)
```

非递归版本（手动模拟栈）
```python
def DFS(self, tree):
	if tree.root is None:
		return []
	visited, stack = [], [tree.root]
	while stack:
		node = stack.pop()
		visited.add(node)
		process (node)
		nodes = generate_related_nodes(node)
		stack.push(nodes)
	# other processing work
	...

```

**广度优先搜索**：常用队列的数据结构辅助
模板代码
```python
# Python
def BFS(graph, start, end):
    visited = set()
	queue = []
	queue.append([start])
	while queue:
		node = queue.pop()
		visited.add(node)
		process(node)
		nodes = generate_related_nodes(node)
		queue.push(nodes)
	# other processing work
	...

```

**贪心算法**：是一种计算局部最优的，但不一定是全局最优，能用贪心算法解决的问题，是有特殊条件限制的。

**二分查找**：对数据的要求是单调递增或者单调递减，时间复杂度（log(N)）
模板代码
```javascript
function binarySearch(nums) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        const val = nums[mid];
        if (val === target) {
            return mid;
        } else if (val > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}
```

### 思考了题：使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方
```javascript
var search = function(nums, target) {
    let left = 0;
    let right = nums.length -1;
    while(left <= right) {
        const mid = left + ((right - left) >> 1);
        const val = nums[mid];
        if (val === target) {
            return mid;
        }
        if (nums[left] <= val) {
            // 左边有序
            if (nums[left] <= target && target < val) {
                // 判断 target 在左区间
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // 右边有序
            if (val < target && target <= nums[right]) {
                // 判断 target 在右区间
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};
```

## 刷题进度
坚持完成每日一题，以及课后习题 达成！
