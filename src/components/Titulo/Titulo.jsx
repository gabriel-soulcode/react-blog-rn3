function Titulo(props) {
    return (
        <h2 style={{
            backgroundColor: "black",
            color: "Yellow",
            textAlign: "center"
        }}>
            {props.children}
        </h2>
    );
}

export default Titulo;