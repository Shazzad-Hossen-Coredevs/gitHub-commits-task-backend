const { Octokit } = require('@octokit/rest');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())
const port = 4000;



const octokit = new Octokit({
    auth: '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',
  });
  
app.get('/commits', async (req, res) => {
    try {
        const owner = 'joyent';
        const repo = 'node';
        const branchName = 'master'; 
        
        
        const { data } = await octokit.repos.listCommits({
          owner,
          repo,
          sha: branchName, 
        });
    
        
        res.json(data);
      } catch (error) {
        console.error('Error fetching data from GitHub API:', error);
        res.status(500).json({ error: 'Unable to fetch data from GitHub API' });
      }
    });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})