import Link from "next/link"
import { GithubOutlined, LinkedinOutlined, FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";

export default function SocialPack() {
  return (
      <div className="container mx-auto px-4 md:px-6 flex md:flex-row items-center justify-start">
        <span className="font-bold">Find me on</span>
        <div className="flex items-center space-x-4 ml-4">
          <Link className="hover:text-gray-500" href="https://github.com/TreenethLin" target="_blank">
            <GithubOutlined className="text-2xl"/>
          </Link>
          <Link className="hover:text-gray-500" href="https://www.linkedin.com/in/yuttapichai-linglom/" target="_blank">
            <LinkedinOutlined className="text-2xl"/>
          </Link>
          <Link className="hover:text-gray-500" href="https://www.facebook.com/paullinglom" target="_blank">
            <FacebookOutlined className="text-2xl"/>
          </Link>
          <Link className="hover:text-gray-500" href="https://www.youtube.com/channel/UCxwso2lyhpFFoIgoKPo608w" target="_blank">
            <YoutubeOutlined className="text-2xl"/>
          </Link>
        </div>
      </div>
  )
}