package team24.issuetracker.member.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import team24.issuetracker.member.application.MemberService;
import team24.issuetracker.member.domain.dto.MemberAddRequest;

@RequestMapping("/members")
@RestController
@RequiredArgsConstructor
public class MemberController {

	private final MemberService memberService;

	@PostMapping("/add")
	public Long save(@RequestBody MemberAddRequest request) {
		return memberService.add(request);
	}
}
