export default function Advice ({info, error}) {
    return (
        <>
            <h2>Thought<span>Ful</span> Advice:</h2>
            <p className="advice">
                {(error===null) ? 
                info.advice ?info.advice : "Alone you go faster, Together you go far"
                :
                <div className="error">{error}</div>}
            </p>
        </>
    )
}