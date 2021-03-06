// git公共仓库管理方案

/*
git submodule add <仓库名> //添加submodule

git submodule init //clone父项目后init submodule

git submodule update //手动更新submodule代码

git clone --recursive https://github.com/chaconinc/MainProject //clone项目时自动初始化并更新仓库中的每一个子模块。git pull 貌似没有

git config -f .gitmodules submodule.<仓库名>.branch <远程分支名> //将submodule关联到特定分支

git submodule update --remote <仓库名> //进入submodule然后抓取并更新
*/
