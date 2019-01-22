import React, { Component } from 'react'
import axios from 'axios'

class DataFetcher extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }

    fetchData = () => {
        axios.get(this.props.url).then(res => {
            this.setState({
                data: res.data.cards
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.data
                        ?
                        this.props.render(this.state.data)
                        :
                        this.fetchData()
                }
            </div>
        )
    }
}

export default DataFetcher;