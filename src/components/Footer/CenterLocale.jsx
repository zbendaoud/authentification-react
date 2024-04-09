import React from 'react';

export default function CenterLocale() {
  return (
    <div className="py-2 px-2  w-full">
      <div className=" bg-vert-claire  rounded-lg">
        <div className="hidden lg:block text-center text-xl font-bold">head office</div>
        <div class="grid grid-cols-2 text-sm lg:text-lg lg:gap-3 px-4 pb-2">
          <div>1418 Michael Street</div>
          <div className="pl-6">(613) 746-3206</div>
          <div>Ottawa</div>
          <div className="pl-6">1-800-267-0860</div>
          <div>ON</div>
          <div className="pl-6">(613) 746-0445</div>
          <div>K1B 3R2</div>
          <div className="pl-6">sales@idealroofing.ca</div>
        </div>
      </div>
    </div>
  );
}
