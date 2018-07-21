import * as React from 'react'

export default class GuessForm extends React.PureComponent {
    render() {
        return (<div>
            <h2>Add a pizza</h2>
            
            <form onSubmit={this.handleSubmit}>
            <label>
                name:
                <input type="text" name='name' onChange={this.handleChange}/>
                </label>
                <label>
                    Description:
                    <input type='text' name='description' onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="submit" />
                    </form>
                    </div>
                     )
    }
}