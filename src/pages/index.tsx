import { useCallback, useState, PureComponent, useMemo } from "react";
import { Modal, Button } from "antd";
import styles from "./index.less";

export default function IndexPage() {
  const [data, setData] = useState(0);
  const childProps = useMemo(
    {
      callback: () => {
        console.log(data);
      },
    },
    []
  );
  return (
    <div>
      <button
        onClick={() => {
          setData(data + 1);
        }}
      >
        changeModal
      </button>
      <Child {...childProps} />
    </div>
  );
}

class Child extends PureComponent {
  render() {
    return <div onClick={this.props.callback}>child</div>;
  }
}
