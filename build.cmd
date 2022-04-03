:: linux 端批量处理文件
:: 先清空 dist
rm -rf dist
mkdir dist

# 对 page 文件夹下的每一个 name 都进行构建
cd ./src
for /d %%i in (*) do (
    if [ "%%~ni" != "common" ]
        echo building %%~i ...
        npm run build -- src/$name/index.html --dist-dir dist/$name --detailed-report
)
pause