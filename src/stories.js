export default function Stories(props) {
    return (
        <div class="stories">
            <div class="story">
              <div class="imagem">
                <img src="assets/img/9gag.svg" />
              </div>
              <div class="usuario">
                {props.user}
              </div>
            </div>
            </div>
    )
}
