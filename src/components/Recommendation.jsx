import '../styles/recommendation.css';

function Recommendation() {
    
    const currentMonth = new Date().getMonth();
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if(isSpring){
        return <div className="title-recommendation">(C'est le printemps, rempotez)</div>
    }else{
        return <div className="title-recommendation">(Ce n'est pas le moment de rempoter)</div>
    }    
}

export default Recommendation;