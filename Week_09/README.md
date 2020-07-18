# 学习笔记

 ### 动态规划

 1. 将复杂的问题拆解成简单的子问题
 2. 分治 + 最优子结构
 3. 动态递推

 **递推模板**

 function DP() {
     dp = [][] // 二维情况

     for i = 0...M {
         for j = 0...N {
             dp[i][j] = function(dp[i`][j`])
         }
     }

     return dp[M][N]
 }


 不同路径II
 ```javascript
 var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    const dp = Array.from({length: m}, () => {
        return new Array(n).fill(0);
    });
    let hasObstacle = false;
    for (let i = 0; i < m; i++) {
        if (obstacleGrid[i][0]) {
            hasObstacle = true;
        }
        
        dp[i][0] = hasObstacle ? 0 : 1;
    }
    hasObstacle = false;
    for (let j = 0; j < n; j++) {
        if (obstacleGrid[0][j]) {
            hasObstacle = true;
        }
        dp[0][j] = hasObstacle ? 0 : 1;
    }

    for (let k = 1; k < m; k++) {
        for (let l = 1; l < n; l++) {
            if (obstacleGrid[k][l] === 1) {
                dp[k][l] = 0;
            } else {
                dp[k][l] = dp[k-1][l] + dp[k][l-1];
            }
        }
    }

    return dp[m-1][n-1];

};
 ```

**高阶 DP 复杂度**
1. 状态拥有更多维度
2. 状态方程更加复杂

## 字符串

### 字符串匹配算法

**Rabin-Krap 算法**
使用子串的 hash 值来比对

代码示例

```java
//Java
public final static int D = 256;
public final static int Q = 9997;

static int RabinKarpSerach(String txt, String pat) {
    int M = pat.length();
    int N = txt.length();
    int i, j;
    int patHash = 0, txtHash = 0;

    for (i = 0; i < M; i++) {
        patHash = (D * patHash + pat.charAt(i)) % Q;
        txtHash = (D * txtHash + txt.charAt(i)) % Q;
    }

    int highestPow = 1;  // pow(256, M-1)
    for (i = 0; i < M - 1; i++) 
        highestPow = (highestPow * D) % Q;

    for (i = 0; i <= N - M; i++) { // 枚举起点
        if (patHash == txtHash) {
            for (j = 0; j < M; j++) {
                if (txt.charAt(i + j) != pat.charAt(j))
                    break;
            }
            if (j == M)
                return i;
        }
        if (i < N - M) {
            txtHash = (D * (txtHash - txt.charAt(i) * highestPow) + txt.charAt(i + M)) % Q;
            if (txtHash < 0)
                txtHash += Q;
        }
    }

    return -1;
}
```
 **KMP 算法**
在模式串和主串匹配的过程中，当遇到坏字符后，对于已经比对过的好前缀，找到一种规律，将模式串一次性滑动很多位。