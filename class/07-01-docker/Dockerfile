FROM node:14

WORKDIR /myfolder/
COPY ./index.js /myfolder/


# # 여러번 입력 가능
# RUN node index.js

RUN yarn install
# 한 번만 입력 가능(마지막 명령에 사용)
CMD node index.js