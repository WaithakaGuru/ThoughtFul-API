export default function Advice ({info}) {
    return (
        <>
            <h2>Thought<span>Ful</span> Advice:</h2>
            <p className="advice">{info.advice || "Alone you go faster, Together you go far"}</p>
        </>
    )
}