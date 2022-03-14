import Icons from "./Icons"

   export default function Posts() {
    const allPosts = [
      {user: "meowed",
       pic: "gato-telefone", 
       likedBy: "respondeai", 
       likedQnt: "101.523"},

      {user: "barked", 
      pic: "dog", 
      likedBy: "adorable_animals", 
      likedQnt: "99.159"},
   ]
    return (
      <div class="posts">
          {allPosts.map(Post)}
      </div>
   )
   }


    function User({user}) {
    return (
      <div class="topo">
          <div class="usuario">
              <img src={`./assets/img/${user}.svg`} />
              {user}
          </div>
          <div class="acoes">
              <Icons IconName="ellipsis-horizontal"/>
          </div>
      </div>
    )
    }

    function Icon() {
     const allIcons = ["heart-outline", "chatbubble-outline", "paper-plane-outline"]
     return (
      <div class="acoes">
          <div>
              {allIcons.map(icon => <Icons IconName={icon}/>)}
          </div>
          <div>
              <Icons IconName="bookmark-outline"/>
          </div>
      </div>
     )
     }

    function Likes({likedBy, likedQnt}) {
     return (
      <div class="curtidas">
       <img src={`./assets/img/${likedBy}.svg`} />
        <div class="texto">
         Curtido por <strong>{likedBy}</strong> e
        <strong>outras {likedQnt} pessoas</strong>
        </div>
      </div>
    )
    }

    function Pic({pic}) {
      return (
      <div class="conteudo">
          <img src={`./assets/img/${pic}.svg`}/>
      </div>
    )
    }

     function Post({user, pic, likedBy, likedQnt}) {
       return (
        <div class="post">
          <User user={user}/>
          <Pic img={pic}/>
          <div class="fundo">
            <Icon />
            <Likes likedBy={likedBy} likedQnt={likedQnt}/>
          </div>
      </div>
    )
    }