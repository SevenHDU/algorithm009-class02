# 学习笔记

## 课程内容
本周的内容是递归。
分治、回溯是算法思想，大多数情况下会使用递归的方式来解决问题。
计算机擅长重复的事，一般的算法，就是寻找重复子问题。但切记避免**人肉递归**。人肉递归，往往让你很懵逼。

分治是将一个问题，拆分成多个子问题来解决，子问题解决完以后，在合并推算出原问题。一般十个 divide - merge 的过程。
回溯是一个暴力求解的过程，选择一条路找终点，发现是死路，再回到原来的岔口，选择另外一条路。一般可以结合剪枝来优化算法效率。

泛型的递归模板
```python
def recursion(level, param1, param2, ...) {
    # recursion terminator
    if level > MAX_LEVEL:
        print_result
        return 
    
    # process logic in current level
    process_data(level, data...) 
    
    # drill down
    self.recursion(level + 1, p1, ...)
    
    # reverse the current level status if needed
    reverse_state(level)
}
```

分治的模板
```Python
def divide_conquer(problem, param1, param2, ...): 
  # recursion terminator 
  if problem is None: 
	print_result 
	return 
  # prepare data 
  data = prepare_data(problem) 
  subproblems = split_problem(problem, data) 
  # conquer subproblems 
  subresult1 = self.divide_conquer(subproblems[0], p1, ...) 
  subresult2 = self.divide_conquer(subproblems[1], p1, ...) 
  subresult3 = self.divide_conquer(subproblems[2], p1, ...) 
  …
  # process and generate the final result 
  result = process_result(subresult1, subresult2, subresult3, …)
	
  # revert the current level states
```

## 刷题进度
坚持完成每日一题，以及课后习题 达标
