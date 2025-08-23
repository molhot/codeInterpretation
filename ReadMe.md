# What's Coding Interpretation 
This application is interpreter of python coding 
This provide you lower part functions 

* input : simple input function 
    * tab : 4space input 
    * Undo/Redo : if you input Ctrl+z or Ctrl+y, Undo or Redo 
    * serch : if you want to serch any words, Ctrl+F will help you 
        * replace : if after serch, you want to replace word whitch you serched, it can 
* highlight : if you write wrong grammer, this will higlight it 
* autocompletion : support you coding 

# このアプリケーションの説明 
このアプリケーションではpythonコードを解釈します 
下部に記載の機能を提供します 

* 入力：単純な入力機能
    * タブキー：space4つ分 
    * Ctrl+z：Undo 
    * Ctrl+y：Redo 
    * Ctrl+F：検索 
        * 上記の機能には置換機能を追加する予定です 
* highlight : python文法にそぐわないものがあればハイライトを表示  
* autocompletion : 自動保管機能 

# python字句解析 
1. NewLine（改行）までが一文
2. #で始まる場合はコメント
    1. ただしエンコードの指定はこちらでする予定（機能としては提供なし）
3. \の場合次の行に渡ってコードであると解釈する
    1. コメントの継続は不可能 
    2. バックスラッシュで終わる場合コメントの挿入は不可 
    3. 丸括弧 (parentheses)、角括弧 (square bracket) 、および波括弧 (curly brace) 内の式は、バックスラッシュを使わずに一行以上の物理行に分割可能 
4. インデントは必ず空白の数が4の倍数になる形でなければならない（tabとemptyが混在している場合など）
    1. インデントレベルはTokenによって管理を行なっている 
        1. インデントが深くなればINDENTトークンを生成 
        2. インデントが浅くなればDEDENTトークンを生成 
        最終的にINDENTトークンに紐づく形でDEDENTトークンが生成されていればOK 
            1. つまりインデントをあえて8など間隔を増やしても問題自体はない、*見づらいだけ*\[^1]
5. 識別子条件
    1. 識別子は関数名や変数名　合わせて識別子 
    2. 条件は下記である
        * 始まりに許容される文字は Lu Ll Lt Lm Lo Nl underscore(_)  
        * その次に続く文字には　始まりで許容した文字 + Mn Mc Nd Pc 
        * 大文字　小文字 Lu Ll 
        * 先頭が大文字  Lt 
        * 修飾文字 Lm 
        * その他の文字 Lo 
        * 数値 Nl 
        * 字幅のない記号 Mn 
        * 字幅のある結合記号 Mc  
        * 10進数字 Nd 
        * 連結用句読記号 Pc  
    3. 簡単のためにéなどは使用できないようにする（unicodeの中でも限定的に使用するものとする）
        * 以降の対応で変更予定 
6. キーワード 
下記のキーワードはキーワードというTOKENにする
False      await      else       import     pass 
None       break      except     in         raise 
True       class      finally    is         return 
and        continue   for        lambda     try 
as         def        from       nonlocal   while 
assert     del        global     not        with 
async      elif       if         or         yield 
7. ソフトキーワード
下記のキーワードは、ソフトキーワードというTOKENにする
match case _ 
8. 予約済みの識別子種
本アプリケーションでは扱わないものとする 
9. 文字列リテラル
参照.  https://docs.python.org/ja/3.13/reference/lexical_analysis.html#grammar-token-python-grammar-xid_start:~:text=%E3%81%95%E3%82%8C%E3%81%BE%E3%81%99%E3%80%82-,2.4.2,-.%20%E6%96%87%E5%AD%97%E5%88%9
追加する際に記載 
fstringなど 
ただし下記に関しては実装する 
* 三重クオートに囲まれたものは一つの文字として扱うこと 
* rが接頭文字の場合は文字列として扱う 
* rが接頭文字でない場合、バックスラッシュはエスケープと扱う 
    * ただし、特定の文字をつけてもエスケープを行うのみであるとする 

以上が字句解析において扱う範囲とする 

\[^1]:具体例を下記に示す 
## OK例 
```python OK例 
def perm(l): 
        # Compute the list of all permutations of l
    if len(l) <= 1:
                  return [l]
    r = []
    for i in range(len(l)):
             s = l[:i] + l[i+1:]
             p = perm(s)
             for x in p:
              r.append(l[i:i+1] + x)
    return r
```

## NG例 
```python NG例
 def perm(l):                       # error: first line indented
for i in range(len(l)):             # error: not indented
    s = l[:i] + l[i+1:]
        p = perm(l[:i] + l[i+1:])   # error: unexpected indent
        for x in p:
                r.append(l[i:i+1] + x)
            return r                # error: inconsistent dedent
```