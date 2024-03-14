function ProfileElement({ profissao }) {

    return (
        <div className="profile-element d-flex row">
            <div className="img-fake mr-14"></div>
            <div className="d-flex column">
            <span className="fs-14 fw-500">Yan Esteves</span>
            <span className="fs-14 text-muted">{profissao}</span>
            </div>
        </div>
    )
}

export default ProfileElement