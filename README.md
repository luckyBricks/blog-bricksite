# blog.bricksite.cn repo

Notion-powered blog based on [nobelium](https://github.com/craigary/nobelium), including more features with modern tech stacks.

Provided on https://blog.bricksite.cn, empowered by **Azure Static Web App**

```bash
docker build -t bricks9711/blog-bricksite:prod  .
docker run -p 3000:3000 -d -e NOTION_PAGE_ID=38b6c000eb4e4cce873e651fb3c80204 -e NOTION_ACCESS_TOKEN=v02%3Auser_token_or_cookies%3A3iGoWWX2D5De2Ns-5Vo75MPKHYx6tK57NWl1PI7eRgw6Xxec6I9UjPJFvDORx4_qIkIVttXU2v4p6eqco89BjaDhBnmcYHgvfT94ZrD7X9Z4Q16CdCV4oJLtG8xUnRpWIN1d bricks9711/blog-bricksite:prod
```
