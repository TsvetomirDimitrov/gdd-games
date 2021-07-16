import { Card } from "antd";
import { useEffect, useState } from "react";
import { getPlayersAccount_id } from "../generated/players";
import PropTypes from "prop-types";
import { LinkOutlined } from "@ant-design/icons";

import "./Member.css";

export const MemberComponent = ({ accountId, name, className }) => {
  const [profile, setProfile] = useState(undefined);
  useEffect(() => {
    getPlayersAccount_id(accountId).then((res) => {
      console.log(res.data);
      if (res.data && res.data.profile) {
        setProfile(res.data);
      }
    });
  }, [accountId]);
  return (
    <Card
      className={`member-card ${className}`}
      hoverable
      title={`${name} (${profile?.profile?.personaname})`}
      extra={
        <>
          <a
            href={`https://www.opendota.com/players/${accountId}`}
            target="_blank"
            rel="noreferrer"
          >
            <LinkOutlined />
          </a>
        </>
      } // TODO: Enable this when href link is fixed this to stop eslint a11y complaining
      style={{ width: 250 }}
      cover={<img alt="example" src={profile?.profile?.avatarfull} />}
    ></Card>
  );
};

MemberComponent.propTypes = {
  accountId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};
