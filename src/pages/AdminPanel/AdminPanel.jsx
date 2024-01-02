import React from "react";
import { TbFileDescription } from "react-icons/tb";
import { PiUsersThreeFill } from "react-icons/pi";
import { Tabs } from "antd";

const AdminPanel = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" p-4 md:p-8 lg:p-12 rounded-md w-full md:w-[80%] lg:w-[60%] xl:w-[80%] h-[90vh]">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane
            key="1"
            tab={
              <div className="flex items-center">
                <div className="flex items-center">
                  <PiUsersThreeFill className="mr-2" />
                  <span>Kullanıcılar</span>
                </div>
              </div>
            }
          >
            <h2>Kullanıcılar</h2>
          </Tabs.TabPane>

          <Tabs.TabPane
            key="2"
            tab={
              <div className="flex items-center">
                <div className="flex items-center">
                  <TbFileDescription className="mr-2" />
                  <span>Tarifler</span>
                </div>
              </div>
            }
          >
            <h2>Tarifler</h2>
            <p>Tarifler içeriği</p>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPanel;
