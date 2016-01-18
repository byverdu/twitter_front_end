## Classes

<dl>
<dt><a href="#Helper">Helper</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#hasTweetImage">hasTweetImage(tweet)</a> ⇒ <code>string</code></dt>
<dd><p>hasTweetImage - checks if object has &quot;media&quot; property</p>
</dd>
<dt><a href="#splitTweetText">splitTweetText(tweet, pattern)</a> ⇒ <code>string</code></dt>
<dd><p>splitTweetText - slices tweet text</p>
</dd>
<dt><a href="#isRetweeted">isRetweeted(tweet)</a> ⇒ <code>Boolean</code></dt>
<dd><p>isRetweeted - checks value for two first characters on tweet text</p>
</dd>
<dt><a href="#getRandomValues">getRandomValues(totalCount)</a> ⇒ <code>number</code></dt>
<dd><p>getRandomValues - Generates a random value between the parameter passed and 0</p>
</dd>
<dt><a href="#convert4digitNumber">convert4digitNumber(number)</a> ⇒ <code>string</code></dt>
<dd><p>convert4digitNumber - converts a number with 4 or more digits into a custom
                      string representation</p>
</dd>
</dl>

<a name="Helper"></a>
## Helper
**Kind**: global class  

* [Helper](#Helper)
    * [.buildTweetObject(tweet)](#Helper+buildTweetObject) ⇒ <code>object</code>
    * [.buildRetweetedObject(tweet)](#Helper+buildRetweetedObject) ⇒ <code>object</code>
    * [.buildUserObject(user)](#Helper+buildUserObject) ⇒ <code>object</code>
    * [.arrayRandomValues(array)](#Helper+arrayRandomValues) ⇒ <code>array</code>
    * [.whichObjectBuild(tweetMethod, retweetMethod, tweet)](#Helper+whichObjectBuild) ⇒ <code>object</code>
    * [.buildToFollow(store, randomArray, finalStore)](#Helper+buildToFollow) ⇒ <code>array</code>

<a name="Helper+buildTweetObject"></a>
### helper.buildTweetObject(tweet) ⇒ <code>object</code>
Helper.prototype.buildTweetObject - Called when is not a retweet,
creates object with API values

**Kind**: instance method of <code>[Helper](#Helper)</code>  
**Returns**: <code>object</code> - custom build object for a non retweet tweet  

| Param | Type | Description |
| --- | --- | --- |
| tweet | <code>object</code> | Single tweet returned object from API |

<a name="Helper+buildRetweetedObject"></a>
### helper.buildRetweetedObject(tweet) ⇒ <code>object</code>
Helper.prototype.buildRetweetedObject - Called when is a retweet,
creates object with API values

**Kind**: instance method of <code>[Helper](#Helper)</code>  
**Returns**: <code>object</code> - custom build object for a retweet tweet  

| Param | Type | Description |
| --- | --- | --- |
| tweet | <code>object</code> | Single tweet object returned from API |

<a name="Helper+buildUserObject"></a>
### helper.buildUserObject(user) ⇒ <code>object</code>
Helper.prototype.buildUserObject - Called to create user object with API values

**Kind**: instance method of <code>[Helper](#Helper)</code>  
**Returns**: <code>object</code> - custom build object with user values  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>object</code> | object returned from the API call. |

<a name="Helper+arrayRandomValues"></a>
### helper.arrayRandomValues(array) ⇒ <code>array</code>
Helper.prototype.arrayRandomValues - fills an array with 3 different random values, used to get toFollow users

**Kind**: instance method of <code>[Helper](#Helper)</code>  
**Returns**: <code>array</code> - array with 3 values to be used as index to retrieve users  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | array with all the custom objects |

<a name="Helper+whichObjectBuild"></a>
### helper.whichObjectBuild(tweetMethod, retweetMethod, tweet) ⇒ <code>object</code>
Helper.prototype.whichObjectBuild - description

**Kind**: instance method of <code>[Helper](#Helper)</code>  
**Returns**: <code>object</code> - description  
**See**

- tweetMethod() => [Helper](#Helper).buildRetweetedObject
- retweetMethod() => [Helper](#Helper).buildRetweetedObject


| Param | Type | Description |
| --- | --- | --- |
| tweetMethod | <code>function</code> | description |
| retweetMethod | <code>function</code> | description |
| tweet | <code>object</code> | description |

<a name="Helper+buildToFollow"></a>
### helper.buildToFollow(store, randomArray, finalStore) ⇒ <code>array</code>
Helper.prototype.buildToFollow - iterates an array to retrieve value depending on a index of random values

**Kind**: instance method of <code>[Helper](#Helper)</code>  
**Returns**: <code>array</code> - "finalStore"  

| Param | Type | Description |
| --- | --- | --- |
| store | <code>array</code> | result with custom objects after API call |
| randomArray | <code>array</code> | random values from the store length |
| finalStore | <code>array</code> | array filled with "store" objects from the position equal than values from "randomArray" |

<a name="hasTweetImage"></a>
## hasTweetImage(tweet) ⇒ <code>string</code>
hasTweetImage - checks if object has "media" property

**Kind**: global function  
**Returns**: <code>string</code> - media url or "no image"  

| Param | Type | Description |
| --- | --- | --- |
| tweet | <code>object</code> | single tweet object |

<a name="splitTweetText"></a>
## splitTweetText(tweet, pattern) ⇒ <code>string</code>
splitTweetText - slices tweet text

**Kind**: global function  
**Returns**: <code>string</code> - last position of splitting the string  

| Param | Type | Description |
| --- | --- | --- |
| tweet | <code>string</code> | - tweet's text |
| pattern | <code>RegExp</code> | - pattern against the string would be split |

<a name="isRetweeted"></a>
## isRetweeted(tweet) ⇒ <code>Boolean</code>
isRetweeted - checks value for two first characters on tweet text

**Kind**: global function  
**Returns**: <code>Boolean</code> - Returns "true" if the text starts by RT  

| Param | Type | Description |
| --- | --- | --- |
| tweet | <code>Object</code> | - single tweet object |

<a name="getRandomValues"></a>
## getRandomValues(totalCount) ⇒ <code>number</code>
getRandomValues - Generates a random value between the parameter passed and 0

**Kind**: global function  
**Returns**: <code>number</code> - random generated value  

| Param | Type | Description |
| --- | --- | --- |
| totalCount | <code>number</code> | - length of array that holds all tweets |

<a name="convert4digitNumber"></a>
## convert4digitNumber(number) ⇒ <code>string</code>
convert4digitNumber - converts a number with 4 or more digits into a custom
                      string representation

**Kind**: global function  
**Returns**: <code>string</code> - the result will depend on the number of digits  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | - number that needs to be converted |

**Example**  
```js
console.log( convert4digitNumber( 7500 ) ); // "7.5K"
console.log( convert4digitNumber( 37500 ) ); // "37.5K"
```
