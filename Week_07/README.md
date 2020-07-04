# 学习笔记

## 课程内容

### 字典树
Trie 树，也叫字典树，或者前缀树，它是一个树形结构。典型应用是用于统计和排序大量的字符串，所以经常被搜索引擎用于词频统计。
优点：**最大限度**地减少无谓的字符串统计，查询效率比哈希表高。

基本性质
1. 节点本身不存完整的单词
2. 从根节点到某一节点，路径上经过的字符连接起来，为该节点对应的字符串
3. 每个节点的所有子节点路径代表的字符都不相同

核心思想：空间换时间。利用字符串的公共前缀来降低查询时间的开销以达到提高效率的目的。

代码模板
```python
# Python 
class Trie(object):
  
	def __init__(self): 
		self.root = {} 
		self.end_of_word = "#" 
 
	def insert(self, word): 
		node = self.root 
		for char in word: 
			node = node.setdefault(char, {}) 
		node[self.end_of_word] = self.end_of_word 
 
	def search(self, word): 
		node = self.root 
		for char in word: 
			if char not in node: 
				return False 
			node = node[char] 
		return self.end_of_word in node 
 
	def startsWith(self, prefix): 
		node = self.root 
		for char in prefix: 
			if char not in node: 
				return False 
			node = node[char] 
		return True
```

### 并查集
适合组团、配对的问题

基本操作
- makeSet(s): 建立一个新的并查集，其中包含 s 个单元素集合
- unionSet(x, y): 把元素 x 和 元素 y 所在的集合合并，要求 x 和 y 所在的集合不相交，如果相交则不合并
- find(x): 找到元素 x 所在的集合代表，该操作也可以用于判断两个元素是否在同一个集合，只要把它们各自的代表比较一下就可以。

代码模板
```java
// Java
class UnionFind { 
	private int count = 0; 
	private int[] parent; 
	public UnionFind(int n) { 
		count = n; 
		parent = new int[n]; 
		for (int i = 0; i < n; i++) { 
			parent[i] = i;
		}
	} 
	public int find(int p) { 
		while (p != parent[p]) { 
			parent[p] = parent[parent[p]]; 
			p = parent[p]; 
		}
		return p; 
	}
	public void union(int p, int q) { 
		int rootP = find(p); 
		int rootQ = find(q); 
		if (rootP == rootQ) return; 
		parent[rootP] = rootQ; 
		count--;
	}
}
```

```python
def init(p): 
	# for i = 0 .. n: p[i] = i; 
	p = [i for i in range(n)] 
 
def union(self, p, i, j): 
	p1 = self.parent(p, i) 
	p2 = self.parent(p, j) 
	p[p1] = p2 
 
def parent(self, p, i): 
	root = i 
	while p[root] != root: 
		root = p[root] 
	while p[i] != i: # 路径压缩 ?
		x = i; i = p[i]; p[x] = root 
	return root

```


### AVL 树和红黑树
AVL 树
1. 平衡二叉搜索树
2. 每个节点存储平衡因子
3. 四种旋转操作

不足：节点需要存储额外信息、调整次数频繁

红黑树
- 近似平衡的二叉搜索树
- 节点的左右子树高度差小于两倍
具体满足的条件
1. 每个节点要么是红色，要么是黑色
2. 根节点是黑色
3. 每个叶子节点是黑色
4. 不能有相邻的两个红色节点
5. 从任一节点到其每个节点的所有路径都包含相同数目的黑色节点

**对比**
1. AVL trees provide **faster lookups** then Red Black Trees because they are **more stictly balanced**
2. Red Black Trees provide **faster insection and removal** operations than AVL trees as fewer rotations are done due to relatively relaxed balancing
3. AVL trees store balance **factors or heights** with each node, thus requires storage for an integer per node whereas Red Black Tree requires only 1 bit of information per node
4. Red Black Trees are used in most of the **language libraries like map, multimap, multisetin C++** whereas AVL trees are used in **database** where faster retrievals are required

## 刷题进度
坚持完成每日一题，以及课后习题 达成！
