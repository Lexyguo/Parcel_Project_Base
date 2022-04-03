# linux 端批量处理文件
# 先清空 dist
rm -rf dist
mkdir dist

# 对 page 文件夹下的每一个 name 都进行构建
cd ./src
for name in $(ls)
do
    if [ "$name"x != "common"x ]
    then
        echo building $name ...
        npm run build -- src/$name/index.html --dist-dir dist/$name --detailed-report
    fi
done