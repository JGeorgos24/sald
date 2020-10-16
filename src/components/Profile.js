import React, {Component} from "react";

class Profile extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div>
                <img className="UserImage" src={this.props.user.profileIMG} alt="User Image" />
                <p>{this.props.user.username}</p>
                {this.props.user.post && this.props.user.posts.map((post, id) => (
                    <div className="post" key={id}>
                        <p>{post.content}</p>
                    </div> 
                ))}
            </div>
        )
    }
}

export default Profile;