import Snake from '../img/snake.png'

export default function Header(){
    return(
        <div>
            <img src={Snake} alt="snake" />
            <p>welcome to andie's blog</p>
        </div>
    )
}