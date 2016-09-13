import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const container = document.getElementById('container');

const githubUsers = [
	{
		login: "olanordbryhn",
		firstName: "Ola",
		id: 525746,
		avatar_url: "https://avatars.githubusercontent.com/u/525746?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/olanordbryhn",
		html_url: "https://github.com/olanordbryhn",
		followers_url: "https://api.github.com/users/olanordbryhn/followers",
		following_url: "https://api.github.com/users/olanordbryhn/following{/other_user}",
		gists_url: "https://api.github.com/users/olanordbryhn/gists{/gist_id}",
		starred_url: "https://api.github.com/users/olanordbryhn/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/olanordbryhn/subscriptions",
		organizations_url: "https://api.github.com/users/olanordbryhn/orgs",
		repos_url: "https://api.github.com/users/olanordbryhn/repos",
		events_url: "https://api.github.com/users/olanordbryhn/events{/privacy}",
		received_events_url: "https://api.github.com/users/olanordbryhn/received_events",
		type: "User",
		site_admin: false
	},
	{
		login: "audunfo",
		firstName: "Audun",
		id: 316324,
		avatar_url: "https://avatars.githubusercontent.com/u/316324?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/audunfo",
		html_url: "https://github.com/audunfo",
		followers_url: "https://api.github.com/users/audunfo/followers",
		following_url: "https://api.github.com/users/audunfo/following{/other_user}",
		gists_url: "https://api.github.com/users/audunfo/gists{/gist_id}",
		starred_url: "https://api.github.com/users/audunfo/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/audunfo/subscriptions",
		organizations_url: "https://api.github.com/users/audunfo/orgs",
		repos_url: "https://api.github.com/users/audunfo/repos",
		events_url: "https://api.github.com/users/audunfo/events{/privacy}",
		received_events_url: "https://api.github.com/users/audunfo/received_events",
		type: "User",
		site_admin: false
	},
	{
		login: "abdavid",
		firstName: "David",
		id: 1027468,
		avatar_url: "https://avatars.githubusercontent.com/u/1027468?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/abdavid",
		html_url: "https://github.com/abdavid",
		followers_url: "https://api.github.com/users/abdavid/followers",
		following_url: "https://api.github.com/users/abdavid/following{/other_user}",
		gists_url: "https://api.github.com/users/abdavid/gists{/gist_id}",
		starred_url: "https://api.github.com/users/abdavid/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/abdavid/subscriptions",
		organizations_url: "https://api.github.com/users/abdavid/orgs",
		repos_url: "https://api.github.com/users/abdavid/repos",
		events_url: "https://api.github.com/users/abdavid/events{/privacy}",
		received_events_url: "https://api.github.com/users/abdavid/received_events",
		type: "User",
		site_admin: false
	},
	{
		login: "kjarnet",
		firstName: "Øystein",
		id: 1008701,
		avatar_url: "https://avatars.githubusercontent.com/u/1008701?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/kjarnet",
		html_url: "https://github.com/kjarnet",
		followers_url: "https://api.github.com/users/kjarnet/followers",
		following_url: "https://api.github.com/users/kjarnet/following{/other_user}",
		gists_url: "https://api.github.com/users/kjarnet/gists{/gist_id}",
		starred_url: "https://api.github.com/users/kjarnet/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/kjarnet/subscriptions",
		organizations_url: "https://api.github.com/users/kjarnet/orgs",
		repos_url: "https://api.github.com/users/kjarnet/repos",
		events_url: "https://api.github.com/users/kjarnet/events{/privacy}",
		received_events_url: "https://api.github.com/users/kjarnet/received_events",
		type: "User",
		site_admin: false
	},
	{
		login: "henrist",
		firstName: "Henrik",
		id: 703354,
		avatar_url: "https://avatars.githubusercontent.com/u/703354?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/henrist",
		html_url: "https://github.com/henrist",
		followers_url: "https://api.github.com/users/henrist/followers",
		following_url: "https://api.github.com/users/henrist/following{/other_user}",
		gists_url: "https://api.github.com/users/henrist/gists{/gist_id}",
		starred_url: "https://api.github.com/users/henrist/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/henrist/subscriptions",
		organizations_url: "https://api.github.com/users/henrist/orgs",
		repos_url: "https://api.github.com/users/henrist/repos",
		events_url: "https://api.github.com/users/henrist/events{/privacy}",
		received_events_url: "https://api.github.com/users/henrist/received_events",
		type: "User",
		site_admin: false
	},
	{
		login: "jonhni",
		firstName: "Jon",
		id: 430645,
		avatar_url: "https://avatars.githubusercontent.com/u/430645?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/jonhni",
		html_url: "https://github.com/jonhni",
		followers_url: "https://api.github.com/users/jonhni/followers",
		following_url: "https://api.github.com/users/jonhni/following{/other_user}",
		gists_url: "https://api.github.com/users/jonhni/gists{/gist_id}",
		starred_url: "https://api.github.com/users/jonhni/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/jonhni/subscriptions",
		organizations_url: "https://api.github.com/users/jonhni/orgs",
		repos_url: "https://api.github.com/users/jonhni/repos",
		events_url: "https://api.github.com/users/jonhni/events{/privacy}",
		received_events_url: "https://api.github.com/users/jonhni/received_events",
		type: "User",
		site_admin: false
	},
	{
		login: "cusspvz",
		firstName: "Ukjent",
		id: 3604053,
		avatar_url: "https://avatars.githubusercontent.com/u/3604053?v=3",
		gravatar_id: "",
		url: "https://api.github.com/users/cusspvz",
		html_url: "https://github.com/cusspvz",
		followers_url: "https://api.github.com/users/cusspvz/followers",
		following_url: "https://api.github.com/users/cusspvz/following{/other_user}",
		gists_url: "https://api.github.com/users/cusspvz/gists{/gist_id}",
		starred_url: "https://api.github.com/users/cusspvz/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/cusspvz/subscriptions",
		organizations_url: "https://api.github.com/users/cusspvz/orgs",
		repos_url: "https://api.github.com/users/cusspvz/repos",
		events_url: "https://api.github.com/users/cusspvz/events{/privacy}",
		received_events_url: "https://api.github.com/users/cusspvz/received_events",
		type: "User",
		site_admin: false
	}
];

/**
 * As mentioned at the beginning, everything in React starts with a component.
 * Using components as the building block, we can assemble multiple
 * components together to create more complex components, or apps.
 *
 * Up until now we have only created components that render native DOM elements
 * as their content. Once we have our own custom component however, it is
 * exactly the same to render that instead of a native element.
 *
 * Example:
 *
 *  ```
 *  const FormField = (props) => {
 *    return (
 *      <div className="form-group">
 *        <label htmlFor={props.htmlFor}>{props.label}</label>
 *        {props.children}
 *      </div>
 *    );
 *  };
 *
 *  const LoginForm = () => {
 *    return (
 *      <form role="form" className="form">
 *        <FormField htmlFor="username" label="Username">
 *          <input className="form-control" name="username" id="username"/>
 *        </FormField>
 *        <FormField htmlFor="password" label="Password">
 *          <input className="form-control" name="password" id="password"/>
 *        </FormField>
 *        <button className="btn btn-primary">Submit</button>
 *      </form>
 *    );
 *  };
 *
 *  ReactDOM.render(<LoginForm/>, container);
 *  ```
 *
 * We could now potentially move `FormField` into it's own file which would
 * allow it to be tested in isolation as well as be imported anywhere else
 * in our application that it may be needed.
 *
 * Exercise:
 *
 *  Create a `Person` component using the following spec.
 *
 *    `Person`:
 *      - Render a `div` with a `className` of `Person`
 *      - Accept the props `loginName`, `firstName` and `avatar`
 *      - Render the loginName and firstName of the person
 *      - Render the `Avatar`
 *      - Render links to GitHub home (`html_url`) using `Icon`
 *
 *    `Avatar`:
 *      - Render an `img` with a `className` of `Avatar`
 *      - Accept the props `size` and `url`
 *      - Adjust the width/height of img according to size (square size, i.e. 200)
 *
 *    `Icon`:
 *      - Render an `a` with a `className` of `Icon`
 *      - Accept the props `href` and `type`
 */

// TODO Your solution here
