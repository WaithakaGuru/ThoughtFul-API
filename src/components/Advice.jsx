export default function Advice ({info, err}) {
    return (
        <>
            <h2>Thought<span>Ful</span> Advice:</h2>
            <p className="advice">
                {(err !==null) ? (
                <div className="error">{err}</div>)
                :
                info
            }
            </p>
        </>
    )
}