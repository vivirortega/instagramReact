import Icons from "./Icons"

export default function Stories(props) {
  const allUsers = ["9gag", "meowed", "barked", "nathanwpylestrangeplanet", "wawawicomics", "respondeai", "filomoderna", "memeriagourmet"];

  return (
   <div class="stories">
   {allUsers.map(Story)}
    <div class="setinhanomeUsuario">
      <Icons IconName="chevron-forward-circle" />
    </div>
   </div>
  )
  }

 function Story(username) {
  return (
   <div class="story">
    <div class="imagem">
     <img src={`./assets/img/${username}.svg`}/>
    </div>
    <div class="usuario">
      {username}
    </div>
   </div>
 )
 }