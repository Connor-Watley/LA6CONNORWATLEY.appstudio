let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]
Button1.onclick=function(){
  let userName = input1.value
  let isMember = members.includes(userName);
  if(isMember == true){
    let label1.value = userName
} else {
    members.push(userName)
    let label1.value = "you are not a member"
    }
}