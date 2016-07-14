import React, { PropTypes } from 'react'
import { connect, PromiseState } from 'react-refetch'
import Loading from './Loading'
import Error from './Error'

var PromiseStateContainer = React.createClass({
    propTypes: {
        // ps: PropTypes.instanceOf(PromiseState).isRequired,
        onPending: PropTypes.func,
        onNoResults: PropTypes.func,
        onRejection: PropTypes.func,
        onFulfillment: PropTypes.func.isRequired
    },

    getDefaultProps: function () {
        return {
            onPending: function (meta) {
                return <Loading></Loading>
            },
            onNoResults: function (value, meta) {
                return <Error error="No Results"></Error>
            },
            onRejection: function (reason, meta) {
                return <Error error={r}></Error>
            }
        };
    },

    isEmptyObject: function (object) {
        return Object.keys(object).length === 0 || Object.keys(object[0]).length === 0
    },

    render() {
        const { ps, onPending, onNoResults, onRejection, onFulfillment } = this.props;

        if (ps.pending) {
            return this.props.onPending(ps.meta);
        } else if (ps.rejected) {
            return this.props.onRejection(ps.reason, ps.meta);
        } else if (ps.fulfilled && this.isEmptyObject(ps.value)) {
            return this.props.onNoResults(ps.value, ps.meta);
        } else if (ps.fulfilled) {
            return this.props.onFulfillment(ps.value, ps.meta)
        } else {
            console.log('invalid promise state', ps);
            return null
        }
    }
});

export default PromiseStateContainer