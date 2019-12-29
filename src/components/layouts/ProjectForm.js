import React from 'react';

const projectform = (props) => {
    return (
        <div>
                <form action="/action_page.php" className="needs-validation" novalidate>
                    <div className="form-group">
                    <label for="projectname">Project Name</label>
                    <input type="text" className="form-control" placeholder="Enter email" id="email" required/>
                    </div>
                    <div className="form-group">
                    <label for="projectdescription">Project Description:</label>
                    <textarea className="form-control" rows="5" id="comment" required></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </div>
        )
};
            
export default projectform;