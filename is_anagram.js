var s = "asdfasdf";
var s1 = "asdfasfasf";

var new_s = []
var new_s1 = []

for (var i = 0; new_s.push(s[i++]) < s.length;);
for (var i = 0; new_s1.push(s1[i++]) < s1.length;);


var s_dict = {};

var s1_dict = {};


for (var i = 0; i < s.length; i++)
{
  if (s[i] in s_dict)
  {
    s_dict[s[i]] = 0;
  }
  else {
    s_dict[s[i]]++;
  }
}

for (var i = 0; i < s1.length; i++)
{
  if (s1[i] in s1_dict)
  {
    s1_dict[s1[i]] = 0;
  }
  else {
    s1_dict[s1[i]]++;
  }
}

var flag = true;


 for (var i = 0; i < s.length; i++)
 {
   if (!s[i] in new_s1)
   {
     flag = false;
     break;
   }
   else if (s_dict[s[i]] != s1_dict[s[i]])
   {
     flag = false;
     break
   }

 }

 if (flag)
 {
   console.log("they are anagrams");
 }
 else {
   console.log("they are not anagrams");
 }
