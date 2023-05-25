# govg-cms-vue

这个模板应该有助于您开始在Vite中使用Vue 3进行开发。
基于Vue3 + Vite开发的CMS内容管理系统。
node版本：18.15.0

## 推荐的IDE

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## 自定义配置

请参阅 [Vite配置参考](https://vitejs.dev/config/).

## npm初始化

```sh
npm install
```

### 运行项目

```sh
npm run dev
```

### 打包编译

```sh
npm run build
```

## UI规范

### A).表格排序

#### 1.字符串排版要求
​    1-6个汉字内的或是固定长度的居中对应，大于6个汉字内容又不定长的居左对齐。

#### 2.整型数量类排序要求
​    右对齐

#### 3.金额排序要求
​    全统一格式化二位小数右对齐

#### 4.状态类的统一带色条

### B).按钮要求

#### 1.表格内
同一排中最常用按钮放第一位，并为关键色

#### 2.导航条内
同一排按钮最常用放第一位，并为关键色


### B).方法命名规范

#### 1.数据加载方法
load+对像名+List      如:loadDataList loadSchoolList

#### 2.数据保存方法 
 add+对像名+Handle     如:addHandle

#### 3.数据修改方法  
update+对像名+Handle  如:updateHandle

#### 4.数据删除方法  
delete+对像名+Handle  如:deleteHandle

#### 5.表单提交方法  
对像名+FormSubmit     如:dataFormSubmit SchoolFormSubmit


### C)变量命名规范

#### 1.数据属性名
完全按后台 Json 名 如 id,name,officeName

#### 2.组件变量名
 完全按组件属性名

#### 3.数据对像
对象+Data 如:sysOfficeData

### D)组件id及ref名命名规范

#### 1.属性按对像属性同名
id,name,username 等

#### 2.表单窗口 id 名
对像名 + form 如:registerForm,sysOfficeForm