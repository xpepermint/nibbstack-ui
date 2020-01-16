
set -e
npm run build
cd dist
echo 'nibbstack.com' > CNAME
git init
git add -A
git commit -m "Deploy page"
git push -f git@github.com:xpepermint/nibbstack-ui.git master:gh-pages
cd -
echo ''
echo '-------------------------------------------------------'
echo '   Deployment complete. Visit: https://nibbstack.com   '
echo '-------------------------------------------------------'