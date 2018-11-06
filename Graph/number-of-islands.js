/**
 * Number of Islands
 * https://leetcode.com/problems/number-of-islands/description/
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid || grid.length == 0) {
    return 0;
  }

  let numRow = grid.length;
  let numCol = grid[0].length;
  let numOfIslands = 0;
  for (let i = 0; i < numRow; i++) {
    for (let j = 0; j < numCol; j++) {
      if (grid[i][j] == "1") {
        numOfIslands++;
        dfs(grid, i, j);
      }
    }
  }
};

function dfs(grid, row, col) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] == "0"
  ) {
    return;
  }

  grid[row][col] = "0";
  dfs(grid, row - 1, col);
  dfs(grid, row + 1, col);
  dfs(grid, row, col + 1);
  dfs(grid, row, col - 1);
}
