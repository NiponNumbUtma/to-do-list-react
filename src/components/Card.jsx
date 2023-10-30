
function Card({ strMealThumb, strMeal, strInstructions, key }) {
    return (
        // fragmen
        <>
            <div className="card w-96 bg-primary text-primary-content shadow-xl">
                <figure>
                    <img
                        // className="w-32"
                        src={strMealThumb} alt={strMeal} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {strMeal}
                        
                        {/* <div className="badge badge-secondary">{strMeal}</div> */}
                    </h2>
                    <p>
                        {strInstructions.substring(0, 150)}...
                        
                        <button className="font-bold hover:underline" onClick={() => document.getElementById('my_modal_3').showModal()}>Viewmore</button>
                        
                    </p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>

            
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">{strMeal}</h3>
                    <p className="py-4">{strInstructions}</p>
                </div>
            </dialog>
        </>

    )
}

export default Card;